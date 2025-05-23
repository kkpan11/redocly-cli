import type { Channel } from '../../typings/asyncapi3.js';
import type { Async3Rule } from '../../visitors.js';
import type { UserContext } from '../../walk.js';

export const ChannelsKebabCase: Async3Rule = () => {
  return {
    Channel(channel: Channel, { report }: UserContext) {
      const segments = (channel.address || '')
        .split(/[/.:]/) // split on / or : as likely channel namespacers
        .filter((s) => s !== ''); // filter out empty segments
      if (!segments.every((segment) => /^{.+}$/.test(segment) || /^[a-z0-9-.]+$/.test(segment))) {
        report({
          message: `\`${channel.address}\` does not use kebab-case.`,
          location: { reportOnKey: true },
        });
      }
    },
  };
};
