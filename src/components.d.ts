/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { State } from "./State";
import { model } from "./model";
import { Events } from "./components/edit-button/index";
import { smoothly } from "smoothly";
import { userwidgets } from "@userwidgets/model";
import { CustomOption } from "./components/user/permission-update/index";
export namespace Components {
    interface UserwidgetsDemo {
    }
    interface UserwidgetsDemoOrganization {
        "state": State;
    }
    interface UserwidgetsDemoUser {
        "state": model.State;
    }
    interface UserwidgetsEditButton {
        "changed": boolean;
        "clearable": boolean;
        "disabled": boolean;
        "state": model.State;
        "toggle": boolean;
    }
    interface UserwidgetsLogin {
        "state": model.State;
    }
    interface UserwidgetsLoginDialog {
        "invite"?: userwidgets.User.Invite;
        "state": model.State;
    }
    interface UserwidgetsLogout {
        "color": smoothly.Color;
        "state": model.State;
    }
    interface UserwidgetsMe {
        "state": model.State;
    }
    interface UserwidgetsOrganization {
        "organization": userwidgets.Organization;
        "state": model.State;
    }
    interface UserwidgetsOrganizationList {
        "state": model.State;
    }
    interface UserwidgetsOrganizationPicker {
        "state": model.State;
    }
    interface UserwidgetsOrganizationUserReinvite {
    }
    interface UserwidgetsOrganizationUserRemove {
        "organization": any;
        "state": model.State;
        "user": userwidgets.User;
    }
    interface UserwidgetsRegisterDialog {
        "invite": userwidgets.User.Invite;
        "state": model.State;
    }
    interface UserwidgetsSetPassword {
        "state": model.State;
        "user": userwidgets.User;
    }
    interface UserwidgetsUser {
        "organization"?: userwidgets.Organization;
        "state": model.State;
        "user": userwidgets.User;
    }
    interface UserwidgetsUserInvited {
        "organization"?: userwidgets.Organization;
        "state": model.State;
        "user": Pick<userwidgets.User, "email">;
    }
    interface UserwidgetsUserInvitedList {
        "state": model.State;
    }
    interface UserwidgetsUserInvitedListRow {
        "state": model.State;
        "user": Pick<userwidgets.User, "email">;
    }
    interface UserwidgetsUserList {
        "organization"?: userwidgets.Organization;
        "state": model.State;
    }
    interface UserwidgetsUserListInvite {
        "state": model.State;
    }
    interface UserwidgetsUserListInviteCell {
        "state": model.State;
    }
    interface UserwidgetsUserListOrganization {
        "state": model.State;
    }
    interface UserwidgetsUserListRow {
        "organization"?: userwidgets.Organization;
        "state": model.State;
        "user": userwidgets.User;
    }
    interface UserwidgetsUserPermissionsUpdate {
        "changed": boolean;
        "label": string;
        "options"?: CustomOption[];
        "preventDefault": boolean;
        "state": model.State;
        "user": userwidgets.User;
    }
    interface UserwidgetsUserStatus {
        "state": model.State;
        "user": userwidgets.User;
    }
}
export interface UserwidgetsEditButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsEditButtonElement;
}
export interface UserwidgetsLoginCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsLoginElement;
}
export interface UserwidgetsLoginDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsLoginDialogElement;
}
export interface UserwidgetsOrganizationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsOrganizationElement;
}
export interface UserwidgetsRegisterDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsRegisterDialogElement;
}
export interface UserwidgetsSetPasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsSetPasswordElement;
}
export interface UserwidgetsUserCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsUserElement;
}
export interface UserwidgetsUserInvitedCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsUserInvitedElement;
}
export interface UserwidgetsUserInvitedListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsUserInvitedListElement;
}
export interface UserwidgetsUserListInviteCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsUserListInviteElement;
}
export interface UserwidgetsUserPermissionsUpdateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsUserPermissionsUpdateElement;
}
declare global {
    interface HTMLUserwidgetsDemoElement extends Components.UserwidgetsDemo, HTMLStencilElement {
    }
    var HTMLUserwidgetsDemoElement: {
        prototype: HTMLUserwidgetsDemoElement;
        new (): HTMLUserwidgetsDemoElement;
    };
    interface HTMLUserwidgetsDemoOrganizationElement extends Components.UserwidgetsDemoOrganization, HTMLStencilElement {
    }
    var HTMLUserwidgetsDemoOrganizationElement: {
        prototype: HTMLUserwidgetsDemoOrganizationElement;
        new (): HTMLUserwidgetsDemoOrganizationElement;
    };
    interface HTMLUserwidgetsDemoUserElement extends Components.UserwidgetsDemoUser, HTMLStencilElement {
    }
    var HTMLUserwidgetsDemoUserElement: {
        prototype: HTMLUserwidgetsDemoUserElement;
        new (): HTMLUserwidgetsDemoUserElement;
    };
    interface HTMLUserwidgetsEditButtonElement extends Components.UserwidgetsEditButton, HTMLStencilElement {
    }
    var HTMLUserwidgetsEditButtonElement: {
        prototype: HTMLUserwidgetsEditButtonElement;
        new (): HTMLUserwidgetsEditButtonElement;
    };
    interface HTMLUserwidgetsLoginElement extends Components.UserwidgetsLogin, HTMLStencilElement {
    }
    var HTMLUserwidgetsLoginElement: {
        prototype: HTMLUserwidgetsLoginElement;
        new (): HTMLUserwidgetsLoginElement;
    };
    interface HTMLUserwidgetsLoginDialogElement extends Components.UserwidgetsLoginDialog, HTMLStencilElement {
    }
    var HTMLUserwidgetsLoginDialogElement: {
        prototype: HTMLUserwidgetsLoginDialogElement;
        new (): HTMLUserwidgetsLoginDialogElement;
    };
    interface HTMLUserwidgetsLogoutElement extends Components.UserwidgetsLogout, HTMLStencilElement {
    }
    var HTMLUserwidgetsLogoutElement: {
        prototype: HTMLUserwidgetsLogoutElement;
        new (): HTMLUserwidgetsLogoutElement;
    };
    interface HTMLUserwidgetsMeElement extends Components.UserwidgetsMe, HTMLStencilElement {
    }
    var HTMLUserwidgetsMeElement: {
        prototype: HTMLUserwidgetsMeElement;
        new (): HTMLUserwidgetsMeElement;
    };
    interface HTMLUserwidgetsOrganizationElement extends Components.UserwidgetsOrganization, HTMLStencilElement {
    }
    var HTMLUserwidgetsOrganizationElement: {
        prototype: HTMLUserwidgetsOrganizationElement;
        new (): HTMLUserwidgetsOrganizationElement;
    };
    interface HTMLUserwidgetsOrganizationListElement extends Components.UserwidgetsOrganizationList, HTMLStencilElement {
    }
    var HTMLUserwidgetsOrganizationListElement: {
        prototype: HTMLUserwidgetsOrganizationListElement;
        new (): HTMLUserwidgetsOrganizationListElement;
    };
    interface HTMLUserwidgetsOrganizationPickerElement extends Components.UserwidgetsOrganizationPicker, HTMLStencilElement {
    }
    var HTMLUserwidgetsOrganizationPickerElement: {
        prototype: HTMLUserwidgetsOrganizationPickerElement;
        new (): HTMLUserwidgetsOrganizationPickerElement;
    };
    interface HTMLUserwidgetsOrganizationUserReinviteElement extends Components.UserwidgetsOrganizationUserReinvite, HTMLStencilElement {
    }
    var HTMLUserwidgetsOrganizationUserReinviteElement: {
        prototype: HTMLUserwidgetsOrganizationUserReinviteElement;
        new (): HTMLUserwidgetsOrganizationUserReinviteElement;
    };
    interface HTMLUserwidgetsOrganizationUserRemoveElement extends Components.UserwidgetsOrganizationUserRemove, HTMLStencilElement {
    }
    var HTMLUserwidgetsOrganizationUserRemoveElement: {
        prototype: HTMLUserwidgetsOrganizationUserRemoveElement;
        new (): HTMLUserwidgetsOrganizationUserRemoveElement;
    };
    interface HTMLUserwidgetsRegisterDialogElement extends Components.UserwidgetsRegisterDialog, HTMLStencilElement {
    }
    var HTMLUserwidgetsRegisterDialogElement: {
        prototype: HTMLUserwidgetsRegisterDialogElement;
        new (): HTMLUserwidgetsRegisterDialogElement;
    };
    interface HTMLUserwidgetsSetPasswordElement extends Components.UserwidgetsSetPassword, HTMLStencilElement {
    }
    var HTMLUserwidgetsSetPasswordElement: {
        prototype: HTMLUserwidgetsSetPasswordElement;
        new (): HTMLUserwidgetsSetPasswordElement;
    };
    interface HTMLUserwidgetsUserElement extends Components.UserwidgetsUser, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserElement: {
        prototype: HTMLUserwidgetsUserElement;
        new (): HTMLUserwidgetsUserElement;
    };
    interface HTMLUserwidgetsUserInvitedElement extends Components.UserwidgetsUserInvited, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserInvitedElement: {
        prototype: HTMLUserwidgetsUserInvitedElement;
        new (): HTMLUserwidgetsUserInvitedElement;
    };
    interface HTMLUserwidgetsUserInvitedListElement extends Components.UserwidgetsUserInvitedList, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserInvitedListElement: {
        prototype: HTMLUserwidgetsUserInvitedListElement;
        new (): HTMLUserwidgetsUserInvitedListElement;
    };
    interface HTMLUserwidgetsUserInvitedListRowElement extends Components.UserwidgetsUserInvitedListRow, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserInvitedListRowElement: {
        prototype: HTMLUserwidgetsUserInvitedListRowElement;
        new (): HTMLUserwidgetsUserInvitedListRowElement;
    };
    interface HTMLUserwidgetsUserListElement extends Components.UserwidgetsUserList, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserListElement: {
        prototype: HTMLUserwidgetsUserListElement;
        new (): HTMLUserwidgetsUserListElement;
    };
    interface HTMLUserwidgetsUserListInviteElement extends Components.UserwidgetsUserListInvite, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserListInviteElement: {
        prototype: HTMLUserwidgetsUserListInviteElement;
        new (): HTMLUserwidgetsUserListInviteElement;
    };
    interface HTMLUserwidgetsUserListInviteCellElement extends Components.UserwidgetsUserListInviteCell, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserListInviteCellElement: {
        prototype: HTMLUserwidgetsUserListInviteCellElement;
        new (): HTMLUserwidgetsUserListInviteCellElement;
    };
    interface HTMLUserwidgetsUserListOrganizationElement extends Components.UserwidgetsUserListOrganization, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserListOrganizationElement: {
        prototype: HTMLUserwidgetsUserListOrganizationElement;
        new (): HTMLUserwidgetsUserListOrganizationElement;
    };
    interface HTMLUserwidgetsUserListRowElement extends Components.UserwidgetsUserListRow, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserListRowElement: {
        prototype: HTMLUserwidgetsUserListRowElement;
        new (): HTMLUserwidgetsUserListRowElement;
    };
    interface HTMLUserwidgetsUserPermissionsUpdateElement extends Components.UserwidgetsUserPermissionsUpdate, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserPermissionsUpdateElement: {
        prototype: HTMLUserwidgetsUserPermissionsUpdateElement;
        new (): HTMLUserwidgetsUserPermissionsUpdateElement;
    };
    interface HTMLUserwidgetsUserStatusElement extends Components.UserwidgetsUserStatus, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserStatusElement: {
        prototype: HTMLUserwidgetsUserStatusElement;
        new (): HTMLUserwidgetsUserStatusElement;
    };
    interface HTMLElementTagNameMap {
        "userwidgets-demo": HTMLUserwidgetsDemoElement;
        "userwidgets-demo-organization": HTMLUserwidgetsDemoOrganizationElement;
        "userwidgets-demo-user": HTMLUserwidgetsDemoUserElement;
        "userwidgets-edit-button": HTMLUserwidgetsEditButtonElement;
        "userwidgets-login": HTMLUserwidgetsLoginElement;
        "userwidgets-login-dialog": HTMLUserwidgetsLoginDialogElement;
        "userwidgets-logout": HTMLUserwidgetsLogoutElement;
        "userwidgets-me": HTMLUserwidgetsMeElement;
        "userwidgets-organization": HTMLUserwidgetsOrganizationElement;
        "userwidgets-organization-list": HTMLUserwidgetsOrganizationListElement;
        "userwidgets-organization-picker": HTMLUserwidgetsOrganizationPickerElement;
        "userwidgets-organization-user-reinvite": HTMLUserwidgetsOrganizationUserReinviteElement;
        "userwidgets-organization-user-remove": HTMLUserwidgetsOrganizationUserRemoveElement;
        "userwidgets-register-dialog": HTMLUserwidgetsRegisterDialogElement;
        "userwidgets-set-password": HTMLUserwidgetsSetPasswordElement;
        "userwidgets-user": HTMLUserwidgetsUserElement;
        "userwidgets-user-invited": HTMLUserwidgetsUserInvitedElement;
        "userwidgets-user-invited-list": HTMLUserwidgetsUserInvitedListElement;
        "userwidgets-user-invited-list-row": HTMLUserwidgetsUserInvitedListRowElement;
        "userwidgets-user-list": HTMLUserwidgetsUserListElement;
        "userwidgets-user-list-invite": HTMLUserwidgetsUserListInviteElement;
        "userwidgets-user-list-invite-cell": HTMLUserwidgetsUserListInviteCellElement;
        "userwidgets-user-list-organization": HTMLUserwidgetsUserListOrganizationElement;
        "userwidgets-user-list-row": HTMLUserwidgetsUserListRowElement;
        "userwidgets-user-permissions-update": HTMLUserwidgetsUserPermissionsUpdateElement;
        "userwidgets-user-status": HTMLUserwidgetsUserStatusElement;
    }
}
declare namespace LocalJSX {
    interface UserwidgetsDemo {
    }
    interface UserwidgetsDemoOrganization {
        "state"?: State;
    }
    interface UserwidgetsDemoUser {
        "state"?: model.State;
    }
    interface UserwidgetsEditButton {
        "changed"?: boolean;
        "clearable"?: boolean;
        "disabled"?: boolean;
        "onUserwidgetsEditCancel"?: (event: UserwidgetsEditButtonCustomEvent<void>) => void;
        "onUserwidgetsEditClear"?: (event: UserwidgetsEditButtonCustomEvent<void>) => void;
        "onUserwidgetsEditEnd"?: (event: UserwidgetsEditButtonCustomEvent<void>) => void;
        "onUserwidgetsEditLoad"?: (event: UserwidgetsEditButtonCustomEvent<(event: Events, handler: () => void) => void>) => void;
        "onUserwidgetsEditStart"?: (event: UserwidgetsEditButtonCustomEvent<void>) => void;
        "onUserwidgetsEditSubmit"?: (event: UserwidgetsEditButtonCustomEvent<void>) => void;
        "state"?: model.State;
        "toggle"?: boolean;
    }
    interface UserwidgetsLogin {
        "onLoggedIn"?: (event: UserwidgetsLoginCustomEvent<any>) => void;
        "onNotice"?: (event: UserwidgetsLoginCustomEvent<smoothly.Notice>) => void;
        "onUserwidgetsLoginLoaded"?: (event: UserwidgetsLoginCustomEvent<any>) => void;
        "state"?: model.State;
    }
    interface UserwidgetsLoginDialog {
        "invite"?: userwidgets.User.Invite;
        "onNotice"?: (event: UserwidgetsLoginDialogCustomEvent<smoothly.Notice>) => void;
        "onUserwidgetsActiveAccount"?: (event: UserwidgetsLoginDialogCustomEvent<boolean>) => void;
        "onUserwidgetsLogin"?: (event: UserwidgetsLoginDialogCustomEvent<userwidgets.User.Credentials>) => void;
        "state"?: model.State;
    }
    interface UserwidgetsLogout {
        "color"?: smoothly.Color;
        "state"?: model.State;
    }
    interface UserwidgetsMe {
        "state"?: model.State;
    }
    interface UserwidgetsOrganization {
        "onNotice"?: (event: UserwidgetsOrganizationCustomEvent<smoothly.Notice>) => void;
        "organization"?: userwidgets.Organization;
        "state"?: model.State;
    }
    interface UserwidgetsOrganizationList {
        "state"?: model.State;
    }
    interface UserwidgetsOrganizationPicker {
        "state"?: model.State;
    }
    interface UserwidgetsOrganizationUserReinvite {
    }
    interface UserwidgetsOrganizationUserRemove {
        "organization"?: any;
        "state"?: model.State;
        "user"?: userwidgets.User;
    }
    interface UserwidgetsRegisterDialog {
        "invite"?: userwidgets.User.Invite;
        "onNotice"?: (event: UserwidgetsRegisterDialogCustomEvent<smoothly.Notice>) => void;
        "onUserwidgetsActiveAccount"?: (event: UserwidgetsRegisterDialogCustomEvent<boolean>) => void;
        "onUserwidgetsRegister"?: (event: UserwidgetsRegisterDialogCustomEvent<{
		invite: userwidgets.User.Invite
		credentials: userwidgets.User.Credentials.Register
	}>) => void;
        "state"?: model.State;
    }
    interface UserwidgetsSetPassword {
        "onNotice"?: (event: UserwidgetsSetPasswordCustomEvent<smoothly.Notice>) => void;
        "state"?: model.State;
        "user"?: userwidgets.User;
    }
    interface UserwidgetsUser {
        "onNotice"?: (event: UserwidgetsUserCustomEvent<smoothly.Notice>) => void;
        "organization"?: userwidgets.Organization;
        "state"?: model.State;
        "user"?: userwidgets.User;
    }
    interface UserwidgetsUserInvited {
        "onNotice"?: (event: UserwidgetsUserInvitedCustomEvent<smoothly.Notice>) => void;
        "organization"?: userwidgets.Organization;
        "state"?: model.State;
        "user"?: Pick<userwidgets.User, "email">;
    }
    interface UserwidgetsUserInvitedList {
        "onNotice"?: (event: UserwidgetsUserInvitedListCustomEvent<smoothly.Notice>) => void;
        "state"?: model.State;
    }
    interface UserwidgetsUserInvitedListRow {
        "state"?: model.State;
        "user"?: Pick<userwidgets.User, "email">;
    }
    interface UserwidgetsUserList {
        "organization"?: userwidgets.Organization;
        "state"?: model.State;
    }
    interface UserwidgetsUserListInvite {
        "onUserwidgetsFormControls"?: (event: UserwidgetsUserListInviteCustomEvent<{ clear: () => void }>) => void;
        "state"?: model.State;
    }
    interface UserwidgetsUserListInviteCell {
        "state"?: model.State;
    }
    interface UserwidgetsUserListOrganization {
        "state"?: model.State;
    }
    interface UserwidgetsUserListRow {
        "organization"?: userwidgets.Organization;
        "state"?: model.State;
        "user"?: userwidgets.User;
    }
    interface UserwidgetsUserPermissionsUpdate {
        "changed"?: boolean;
        "label"?: string;
        "onUserPermissionUpdated"?: (event: UserwidgetsUserPermissionsUpdateCustomEvent<userwidgets.User.Permissions>) => void;
        "options"?: CustomOption[];
        "preventDefault"?: boolean;
        "state"?: model.State;
        "user"?: userwidgets.User;
    }
    interface UserwidgetsUserStatus {
        "state"?: model.State;
        "user"?: userwidgets.User;
    }
    interface IntrinsicElements {
        "userwidgets-demo": UserwidgetsDemo;
        "userwidgets-demo-organization": UserwidgetsDemoOrganization;
        "userwidgets-demo-user": UserwidgetsDemoUser;
        "userwidgets-edit-button": UserwidgetsEditButton;
        "userwidgets-login": UserwidgetsLogin;
        "userwidgets-login-dialog": UserwidgetsLoginDialog;
        "userwidgets-logout": UserwidgetsLogout;
        "userwidgets-me": UserwidgetsMe;
        "userwidgets-organization": UserwidgetsOrganization;
        "userwidgets-organization-list": UserwidgetsOrganizationList;
        "userwidgets-organization-picker": UserwidgetsOrganizationPicker;
        "userwidgets-organization-user-reinvite": UserwidgetsOrganizationUserReinvite;
        "userwidgets-organization-user-remove": UserwidgetsOrganizationUserRemove;
        "userwidgets-register-dialog": UserwidgetsRegisterDialog;
        "userwidgets-set-password": UserwidgetsSetPassword;
        "userwidgets-user": UserwidgetsUser;
        "userwidgets-user-invited": UserwidgetsUserInvited;
        "userwidgets-user-invited-list": UserwidgetsUserInvitedList;
        "userwidgets-user-invited-list-row": UserwidgetsUserInvitedListRow;
        "userwidgets-user-list": UserwidgetsUserList;
        "userwidgets-user-list-invite": UserwidgetsUserListInvite;
        "userwidgets-user-list-invite-cell": UserwidgetsUserListInviteCell;
        "userwidgets-user-list-organization": UserwidgetsUserListOrganization;
        "userwidgets-user-list-row": UserwidgetsUserListRow;
        "userwidgets-user-permissions-update": UserwidgetsUserPermissionsUpdate;
        "userwidgets-user-status": UserwidgetsUserStatus;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "userwidgets-demo": LocalJSX.UserwidgetsDemo & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoElement>;
            "userwidgets-demo-organization": LocalJSX.UserwidgetsDemoOrganization & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoOrganizationElement>;
            "userwidgets-demo-user": LocalJSX.UserwidgetsDemoUser & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoUserElement>;
            "userwidgets-edit-button": LocalJSX.UserwidgetsEditButton & JSXBase.HTMLAttributes<HTMLUserwidgetsEditButtonElement>;
            "userwidgets-login": LocalJSX.UserwidgetsLogin & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginElement>;
            "userwidgets-login-dialog": LocalJSX.UserwidgetsLoginDialog & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginDialogElement>;
            "userwidgets-logout": LocalJSX.UserwidgetsLogout & JSXBase.HTMLAttributes<HTMLUserwidgetsLogoutElement>;
            "userwidgets-me": LocalJSX.UserwidgetsMe & JSXBase.HTMLAttributes<HTMLUserwidgetsMeElement>;
            "userwidgets-organization": LocalJSX.UserwidgetsOrganization & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationElement>;
            "userwidgets-organization-list": LocalJSX.UserwidgetsOrganizationList & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationListElement>;
            "userwidgets-organization-picker": LocalJSX.UserwidgetsOrganizationPicker & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationPickerElement>;
            "userwidgets-organization-user-reinvite": LocalJSX.UserwidgetsOrganizationUserReinvite & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationUserReinviteElement>;
            "userwidgets-organization-user-remove": LocalJSX.UserwidgetsOrganizationUserRemove & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationUserRemoveElement>;
            "userwidgets-register-dialog": LocalJSX.UserwidgetsRegisterDialog & JSXBase.HTMLAttributes<HTMLUserwidgetsRegisterDialogElement>;
            "userwidgets-set-password": LocalJSX.UserwidgetsSetPassword & JSXBase.HTMLAttributes<HTMLUserwidgetsSetPasswordElement>;
            "userwidgets-user": LocalJSX.UserwidgetsUser & JSXBase.HTMLAttributes<HTMLUserwidgetsUserElement>;
            "userwidgets-user-invited": LocalJSX.UserwidgetsUserInvited & JSXBase.HTMLAttributes<HTMLUserwidgetsUserInvitedElement>;
            "userwidgets-user-invited-list": LocalJSX.UserwidgetsUserInvitedList & JSXBase.HTMLAttributes<HTMLUserwidgetsUserInvitedListElement>;
            "userwidgets-user-invited-list-row": LocalJSX.UserwidgetsUserInvitedListRow & JSXBase.HTMLAttributes<HTMLUserwidgetsUserInvitedListRowElement>;
            "userwidgets-user-list": LocalJSX.UserwidgetsUserList & JSXBase.HTMLAttributes<HTMLUserwidgetsUserListElement>;
            "userwidgets-user-list-invite": LocalJSX.UserwidgetsUserListInvite & JSXBase.HTMLAttributes<HTMLUserwidgetsUserListInviteElement>;
            "userwidgets-user-list-invite-cell": LocalJSX.UserwidgetsUserListInviteCell & JSXBase.HTMLAttributes<HTMLUserwidgetsUserListInviteCellElement>;
            "userwidgets-user-list-organization": LocalJSX.UserwidgetsUserListOrganization & JSXBase.HTMLAttributes<HTMLUserwidgetsUserListOrganizationElement>;
            "userwidgets-user-list-row": LocalJSX.UserwidgetsUserListRow & JSXBase.HTMLAttributes<HTMLUserwidgetsUserListRowElement>;
            "userwidgets-user-permissions-update": LocalJSX.UserwidgetsUserPermissionsUpdate & JSXBase.HTMLAttributes<HTMLUserwidgetsUserPermissionsUpdateElement>;
            "userwidgets-user-status": LocalJSX.UserwidgetsUserStatus & JSXBase.HTMLAttributes<HTMLUserwidgetsUserStatusElement>;
        }
    }
}
