import Button from "@components/button";
import { css } from "@emotion/react";
import GlobalLayout from "@layouts/global";
import { mediaQuery } from "@styles/global";
import NotFoundVector from "@vectors/404";
import Head from "next/head";

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
    <>
      <Head>
        <title>Clean Tank Services | 404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />
      </Head>
      <GlobalLayout>
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
      </GlobalLayout>
    </>
  );
};

export default NotFoundPage;
