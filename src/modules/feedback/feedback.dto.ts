export class FeedbackDto {
    orderId: string;
    clientId?: string;
    devId?: string;
    content: string;
}

export class GetFeedbackDto {
    clientId?: string;
    devId?: string;
}
