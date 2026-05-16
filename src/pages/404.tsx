import Button from "@components/button";
import { css } from "@emotion/react";
import { mediaQuery } from "@styles/global";
import NotFoundVector from "@vectors/404";

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  --_height-var: 2.25rem;
  padding-top: calc(var(--_height-var) + (2 * 1rem) + 2.5rem);
  padding-bottom: 2.5rem;
  gap: 0.75rem;
  ${mediaQuery.nonDesktop} {
    --_height-var: 1.5rem;
  }
`;

const NotFoundPage = () => {
  return (
    <div css={styles}>
      <NotFoundVector width="480" height="480" />
      <Button
        href="https://storyset.com/web"
        $variant="text"
        target="_blank"
        rel="noopener noreferrer"
        $size="sm"
        $textColor={"neutral"}
        $textColorWeight="400"
      >
        Web illustration by Storyset
      </Button>
    </div>
  );
};

export default NotFoundPage;
