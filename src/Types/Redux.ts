export interface Store{
    count: number,
    index: number,
}

export interface Action{
    type: String,
    payload?: any,
}