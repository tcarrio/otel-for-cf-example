import { Env } from '../types';

export interface MessageData {
  // data passed in message
  property: string;
}

export async function queueHandler(
  batch: MessageBatch<MessageData>,
  env: Env,
  ctx: ExecutionContext,
) {
  for (const message of batch.messages) {
    console.log(message.body.property);
    message.ack();
  }
}
