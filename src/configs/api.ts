interface IApiCRUD {
    LIST: string
    CREATE: string
    DETAIL: string
    UPDATE: string
    DELETE: string
}

// Users
const userApi: IApiCRUD = {
    LIST: "/users",
    CREATE: "/us",
    DETAIL: "/user/detail",
    UPDATE: "/users",
    DELETE: "/users",
}

export default userApi