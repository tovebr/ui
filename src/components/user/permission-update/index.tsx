import { Component, Event, EventEmitter, h, Prop, State, Watch } from "@stencil/core"
import { Option } from "smoothly"
import { model } from "../../../model"

export interface CustomOption {
	name: string
	value: string[]
	checked: boolean
}

@Component({
	tag: "userwidgets-user-permissions-update",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsPermissionUpdate {
	@Prop() state: model.State
	@Prop() user: model.userwidgets.User.Readable
	@Prop() label = "Permissions:"
	@Prop() options?: CustomOption[]
	@Prop() preventDefault = false
	@State() pickerOptions?: (Option & { checked: boolean })[]
	@State() selectedOptions?: model.userwidgets.User.Permissions.Readable
	@State() key?: model.userwidgets.User.Key
	@State() organizationId?: string
	@Event() userPermissionUpdated: EventEmitter<model.userwidgets.User.Permissions.Readable>

	@Watch("key")
	@Watch("organizationId")
	updateOptions() {
		this.pickerOptions =
			!this.organizationId || !this.key
				? undefined
				: Object.entries(
						model.userwidgets.User.Permissions.Readable.assign(
							model.userwidgets.User.Permissions.Readable.copy(this.key.permissions, false),
							this.user.permissions
						)[this.organizationId] ?? {}
				  )
						.map(
							([resource, permission]) =>
								permission &&
								Object.keys(permission)
									.map(access => ({
										name: `${resource} ${access}`,
										value: [`organization|${this.organizationId}|${resource}|${access}`],
										checked:
											!!this.user.permissions[this.organizationId ?? ""]?.[resource]?.[
												access as keyof model.userwidgets.User.Permissions.Permission
											],
									}))
									.flat()
						)
						.flat()
						.filter((option): option is Option & { checked: boolean } => !!option)
	}

	componentWillLoad() {
		this.options && (this.pickerOptions = this.options)
		!this.options &&
			this.state.me.listen("key", async promise => {
				const key = await promise
				this.key = !key ? undefined : key
			}),
			this.state.listen("options", options => (this.organizationId = options.organizationId))
	}

	handleMenuClosed(event: CustomEvent<Option[]>) {
		this.selectedOptions = event.detail.reduce<model.userwidgets.User.Permissions.Readable>(
			(target, { value: values }) => (
				Array.isArray(values) &&
					values.forEach(value =>
						(([match, organizationId, resource, action]) =>
							match && model.nest(target, [organizationId, resource, action], true))(
							(typeof value != "string" ? undefined : value.match(/^organization\|([^|]+)\|([^|]+)\|([^|]+)$/)) ?? []
						)
					),
				target
			),
			model.userwidgets.User.Permissions.Readable.copy(this.key?.permissions ?? {}, false)
		)
	}

	handleClick() {
		!this.preventDefault &&
			this.selectedOptions &&
			this.state.user.updatePermissions(this.user.email, this.selectedOptions)
	}

	render() {
		return (
			<form onSubmit={event => event.preventDefault()}>
				<span>{this.label}</span>
				<div class={"inputs"}>
					<smoothly-picker
						label={this.label}
						onMenuClose={event => this.handleMenuClosed(event)}
						multiple={true}
						options={this.pickerOptions}
						selections={this.pickerOptions?.filter(option => option.checked) ?? []}></smoothly-picker>
					<smoothly-button onClick={() => this.handleClick()}>Update</smoothly-button>
				</div>
			</form>
		)
	}
}