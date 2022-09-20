import { ButtonLoad } from './Button.styled';

const Button = ({ loadMoreHandler }) => (
  <ButtonLoad type="button" onClick={loadMoreHandler}>
    Load more
  </ButtonLoad>
);

export default Button;
