export function transformUserName(displayName?:string | null, email?:string | null) {
    if (displayName) {
        const split = displayName.split(' ');
        const name = split[0].toUpperCase();
        const surname = split[1].toUpperCase();

        return {displayName, email: email ? email : undefined, _tr: name[0] + surname[0]};
    } else if (!displayName && email) {
        return {displayName: undefined, email, _tr: email?.slice(2).toUpperCase()
    };
    } else {
        return {displayName: undefined,email: email ? email : "",  _tr: "AN"};
    }
}