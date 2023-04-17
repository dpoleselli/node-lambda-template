import { EventBridgeEvent } from 'aws-lambda';
import { handler } from '.';

handler({} as EventBridgeEvent<string, unknown>);
