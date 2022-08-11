import PropTypes from 'prop-types';
import { Wrapper } from 'components/ui/Wrapper';
import { MessageText } from './Message.style';

export const Message = () => {
  return (
    <Wrapper>
      <MessageText>Contact list is empty.</MessageText>
    </Wrapper>
  );
};

Message.prototype = {
  text: PropTypes.string.isRequired,
};
