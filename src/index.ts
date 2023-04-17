import { EventBridgeEvent } from 'aws-lambda';

export const handler = async (event: EventBridgeEvent<string, unknown>) => {
  console.log('event', event);
};
