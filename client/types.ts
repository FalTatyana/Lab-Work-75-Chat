export interface Message {
 id: string
 author: string,
 message: string
 datetime: string
};

export interface MessageFromApi {
 author: string,
 message: string,
 datetime: string,
 id: string
}