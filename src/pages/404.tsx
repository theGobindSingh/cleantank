import Button from "@components/button";
import { H1, P } from "@components/html";
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
  text-align: center;
  svg {
    max-width: 100%;
    height: auto;
  }
  ${mediaQuery.nonDesktop} {
    --_height-var: 1.5rem;
  }
`;

const linksWrapperStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 0.5rem 0 1rem;
`;

const NotFoundPage = () => {
  return (
    <div css={styles}>
      <NotFoundVector width="480" height="480" />
      <H1 $size="2xl" $weight="700" $color="primary" $colorWeight="100">
        Page Not Found
      </H1>
      <P $size="m" $weight="400" $color="neutral" $colorWeight="600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </P>
      <div css={linksWrapperStyles}>
        <Button
          href="/"
          $variant="filled"
          $color="secondary"
          $colorWeight="800"
          $textColor="accent"
          $textColorWeight="100"
          $fontWeight="600"
        >
          Back to Home
        </Button>
        <Button
          href="/process"
          $variant="glass"
          $withBorder
          $color="secondary"
          $colorWeight="800"
          $textColor="secondary"
          $textColorWeight="800"
          $fontWeight="600"
        >
          Our Process
        </Button>
        <Button
          href="/contact"
          $variant="glass"
          $withBorder
          $color="secondary"
          $colorWeight="800"
          $textColor="secondary"
          $textColorWeight="800"
          $fontWeight="600"
        >
          Contact Us
        </Button>
      </div>
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
