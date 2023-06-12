/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { model } from "./model";
import { userwidgets } from "@userwidgets/model";
import { smoothly } from "smoothly";
import { CustomOption } from "./components/user/permission-update/index";
export namespace Components {
    interface UserwidgetsChangeName {
        "name": userwidgets.User.Name;
        "state": model.State;
    }
    interface UserwidgetsChangePassword {
        "state": model.State;
    }
    interface UserwidgetsDemo {
    }
    interface UserwidgetsLogin {
        "state": model.State;
    }
    interface UserwidgetsLoginDialog {
        "invite"?: userwidgets.User.Invite;
        "state": model.State;
    }
    interface UserwidgetsLoginTrigger {
        "state": model.State;
    }
    interface UserwidgetsLogout {
        "state": model.State;
    }
    interface UserwidgetsMe {
        "state": model.State;
    }
    interface UserwidgetsMenu {
        "menuOpen": boolean;
    }
    interface UserwidgetsOrganizationPicker {
        "state": model.State;
    }
    interface UserwidgetsOrganizationUserReinvite {
    }
    interface UserwidgetsOrganizationUserRemove {
        "organization": any;
        "state": model.State;
        "user": userwidgets.User.Readable;
    }
    interface UserwidgetsRegisterDialog {
        "invite"?: userwidgets.User.Invite;
        "state": model.State;
    }
    interface UserwidgetsSetPassword {
        "state": model.State;
        "user": userwidgets.User;
    }
    interface UserwidgetsUserListInvited {
        "state": model.State;
    }
    interface UserwidgetsUserListMember {
        "state": model.State;
    }
    interface UserwidgetsUserPermissionsUpdate {
        "changed": boolean;
        "label": string;
        "options"?: CustomOption[];
        "preventDefault": boolean;
        "state": model.State;
        "user": userwidgets.User.Readable;
    }
    interface UserwidgetsUserStatus {
        "state": model.State;
        "user": userwidgets.User.Readable;
    }
}
export interface UserwidgetsChangeNameCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsChangeNameElement;
}
export interface UserwidgetsChangePasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsChangePasswordElement;
}
export interface UserwidgetsLoginCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsLoginElement;
}
export interface UserwidgetsLoginDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsLoginDialogElement;
}
export interface UserwidgetsRegisterDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsRegisterDialogElement;
}
export interface UserwidgetsSetPasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsSetPasswordElement;
}
export interface UserwidgetsUserPermissionsUpdateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserwidgetsUserPermissionsUpdateElement;
}
declare global {
    interface HTMLUserwidgetsChangeNameElement extends Components.UserwidgetsChangeName, HTMLStencilElement {
    }
    var HTMLUserwidgetsChangeNameElement: {
        prototype: HTMLUserwidgetsChangeNameElement;
        new (): HTMLUserwidgetsChangeNameElement;
    };
    interface HTMLUserwidgetsChangePasswordElement extends Components.UserwidgetsChangePassword, HTMLStencilElement {
    }
    var HTMLUserwidgetsChangePasswordElement: {
        prototype: HTMLUserwidgetsChangePasswordElement;
        new (): HTMLUserwidgetsChangePasswordElement;
    };
    interface HTMLUserwidgetsDemoElement extends Components.UserwidgetsDemo, HTMLStencilElement {
    }
    var HTMLUserwidgetsDemoElement: {
        prototype: HTMLUserwidgetsDemoElement;
        new (): HTMLUserwidgetsDemoElement;
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
    interface HTMLUserwidgetsLoginTriggerElement extends Components.UserwidgetsLoginTrigger, HTMLStencilElement {
    }
    var HTMLUserwidgetsLoginTriggerElement: {
        prototype: HTMLUserwidgetsLoginTriggerElement;
        new (): HTMLUserwidgetsLoginTriggerElement;
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
    interface HTMLUserwidgetsMenuElement extends Components.UserwidgetsMenu, HTMLStencilElement {
    }
    var HTMLUserwidgetsMenuElement: {
        prototype: HTMLUserwidgetsMenuElement;
        new (): HTMLUserwidgetsMenuElement;
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
    interface HTMLUserwidgetsUserListInvitedElement extends Components.UserwidgetsUserListInvited, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserListInvitedElement: {
        prototype: HTMLUserwidgetsUserListInvitedElement;
        new (): HTMLUserwidgetsUserListInvitedElement;
    };
    interface HTMLUserwidgetsUserListMemberElement extends Components.UserwidgetsUserListMember, HTMLStencilElement {
    }
    var HTMLUserwidgetsUserListMemberElement: {
        prototype: HTMLUserwidgetsUserListMemberElement;
        new (): HTMLUserwidgetsUserListMemberElement;
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
        "userwidgets-change-name": HTMLUserwidgetsChangeNameElement;
        "userwidgets-change-password": HTMLUserwidgetsChangePasswordElement;
        "userwidgets-demo": HTMLUserwidgetsDemoElement;
        "userwidgets-login": HTMLUserwidgetsLoginElement;
        "userwidgets-login-dialog": HTMLUserwidgetsLoginDialogElement;
        "userwidgets-login-trigger": HTMLUserwidgetsLoginTriggerElement;
        "userwidgets-logout": HTMLUserwidgetsLogoutElement;
        "userwidgets-me": HTMLUserwidgetsMeElement;
        "userwidgets-menu": HTMLUserwidgetsMenuElement;
        "userwidgets-organization-picker": HTMLUserwidgetsOrganizationPickerElement;
        "userwidgets-organization-user-reinvite": HTMLUserwidgetsOrganizationUserReinviteElement;
        "userwidgets-organization-user-remove": HTMLUserwidgetsOrganizationUserRemoveElement;
        "userwidgets-register-dialog": HTMLUserwidgetsRegisterDialogElement;
        "userwidgets-set-password": HTMLUserwidgetsSetPasswordElement;
        "userwidgets-user-list-invited": HTMLUserwidgetsUserListInvitedElement;
        "userwidgets-user-list-member": HTMLUserwidgetsUserListMemberElement;
        "userwidgets-user-permissions-update": HTMLUserwidgetsUserPermissionsUpdateElement;
        "userwidgets-user-status": HTMLUserwidgetsUserStatusElement;
    }
}
declare namespace LocalJSX {
    interface UserwidgetsChangeName {
        "name"?: userwidgets.User.Name;
        "onNotice"?: (event: UserwidgetsChangeNameCustomEvent<smoothly.Notice>) => void;
        "state"?: model.State;
    }
    interface UserwidgetsChangePassword {
        "onNotice"?: (event: UserwidgetsChangePasswordCustomEvent<smoothly.Notice>) => void;
        "state"?: model.State;
    }
    interface UserwidgetsDemo {
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
    interface UserwidgetsLoginTrigger {
        "state"?: model.State;
    }
    interface UserwidgetsLogout {
        "state"?: model.State;
    }
    interface UserwidgetsMe {
        "state"?: model.State;
    }
    interface UserwidgetsMenu {
        "menuOpen"?: boolean;
    }
    interface UserwidgetsOrganizationPicker {
        "state"?: model.State;
    }
    interface UserwidgetsOrganizationUserReinvite {
    }
    interface UserwidgetsOrganizationUserRemove {
        "organization"?: any;
        "state"?: model.State;
        "user"?: userwidgets.User.Readable;
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
    interface UserwidgetsUserListInvited {
        "state"?: model.State;
    }
    interface UserwidgetsUserListMember {
        "state"?: model.State;
    }
    interface UserwidgetsUserPermissionsUpdate {
        "changed"?: boolean;
        "label"?: string;
        "onUserPermissionUpdated"?: (event: UserwidgetsUserPermissionsUpdateCustomEvent<userwidgets.User.Permissions.Readable>) => void;
        "options"?: CustomOption[];
        "preventDefault"?: boolean;
        "state"?: model.State;
        "user"?: userwidgets.User.Readable;
    }
    interface UserwidgetsUserStatus {
        "state"?: model.State;
        "user"?: userwidgets.User.Readable;
    }
    interface IntrinsicElements {
        "userwidgets-change-name": UserwidgetsChangeName;
        "userwidgets-change-password": UserwidgetsChangePassword;
        "userwidgets-demo": UserwidgetsDemo;
        "userwidgets-login": UserwidgetsLogin;
        "userwidgets-login-dialog": UserwidgetsLoginDialog;
        "userwidgets-login-trigger": UserwidgetsLoginTrigger;
        "userwidgets-logout": UserwidgetsLogout;
        "userwidgets-me": UserwidgetsMe;
        "userwidgets-menu": UserwidgetsMenu;
        "userwidgets-organization-picker": UserwidgetsOrganizationPicker;
        "userwidgets-organization-user-reinvite": UserwidgetsOrganizationUserReinvite;
        "userwidgets-organization-user-remove": UserwidgetsOrganizationUserRemove;
        "userwidgets-register-dialog": UserwidgetsRegisterDialog;
        "userwidgets-set-password": UserwidgetsSetPassword;
        "userwidgets-user-list-invited": UserwidgetsUserListInvited;
        "userwidgets-user-list-member": UserwidgetsUserListMember;
        "userwidgets-user-permissions-update": UserwidgetsUserPermissionsUpdate;
        "userwidgets-user-status": UserwidgetsUserStatus;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "userwidgets-change-name": LocalJSX.UserwidgetsChangeName & JSXBase.HTMLAttributes<HTMLUserwidgetsChangeNameElement>;
            "userwidgets-change-password": LocalJSX.UserwidgetsChangePassword & JSXBase.HTMLAttributes<HTMLUserwidgetsChangePasswordElement>;
            "userwidgets-demo": LocalJSX.UserwidgetsDemo & JSXBase.HTMLAttributes<HTMLUserwidgetsDemoElement>;
            "userwidgets-login": LocalJSX.UserwidgetsLogin & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginElement>;
            "userwidgets-login-dialog": LocalJSX.UserwidgetsLoginDialog & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginDialogElement>;
            "userwidgets-login-trigger": LocalJSX.UserwidgetsLoginTrigger & JSXBase.HTMLAttributes<HTMLUserwidgetsLoginTriggerElement>;
            "userwidgets-logout": LocalJSX.UserwidgetsLogout & JSXBase.HTMLAttributes<HTMLUserwidgetsLogoutElement>;
            "userwidgets-me": LocalJSX.UserwidgetsMe & JSXBase.HTMLAttributes<HTMLUserwidgetsMeElement>;
            "userwidgets-menu": LocalJSX.UserwidgetsMenu & JSXBase.HTMLAttributes<HTMLUserwidgetsMenuElement>;
            "userwidgets-organization-picker": LocalJSX.UserwidgetsOrganizationPicker & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationPickerElement>;
            "userwidgets-organization-user-reinvite": LocalJSX.UserwidgetsOrganizationUserReinvite & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationUserReinviteElement>;
            "userwidgets-organization-user-remove": LocalJSX.UserwidgetsOrganizationUserRemove & JSXBase.HTMLAttributes<HTMLUserwidgetsOrganizationUserRemoveElement>;
            "userwidgets-register-dialog": LocalJSX.UserwidgetsRegisterDialog & JSXBase.HTMLAttributes<HTMLUserwidgetsRegisterDialogElement>;
            "userwidgets-set-password": LocalJSX.UserwidgetsSetPassword & JSXBase.HTMLAttributes<HTMLUserwidgetsSetPasswordElement>;
            "userwidgets-user-list-invited": LocalJSX.UserwidgetsUserListInvited & JSXBase.HTMLAttributes<HTMLUserwidgetsUserListInvitedElement>;
            "userwidgets-user-list-member": LocalJSX.UserwidgetsUserListMember & JSXBase.HTMLAttributes<HTMLUserwidgetsUserListMemberElement>;
            "userwidgets-user-permissions-update": LocalJSX.UserwidgetsUserPermissionsUpdate & JSXBase.HTMLAttributes<HTMLUserwidgetsUserPermissionsUpdateElement>;
            "userwidgets-user-status": LocalJSX.UserwidgetsUserStatus & JSXBase.HTMLAttributes<HTMLUserwidgetsUserStatusElement>;
        }
    }
}
