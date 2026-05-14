import Chip from "@components/chip";
import { H3, P } from "@components/html";
import {
  ImageCardContentWrapper,
  ImageCardWrapper,
} from "@components/image-card/styles";
import { ImageCardProps } from "@components/image-card/types";
import Image from "next/image";
import { Fragment } from "react";

const ImageCard = ({
  number,
  chip,
  $isReversed,
  title,
  description,
  imageSrc,
  bottomIcon: BottomIcon = Fragment as never,
  bottomIconText,
  className,
}: ImageCardProps) => {
  return (
    <ImageCardWrapper $isReversed={!!$isReversed} className={className}>
      <ImageCardContentWrapper className="content">
        {chip && <Chip>{chip}</Chip>}
        {number && (
          <span className="number">
            {Number(number) < 10 ? `0${number}` : number}
          </span>
        )}
        <H3
          className="title"
          $color="accent"
          $colorWeight="200"
          $weight="600"
          $margin="0 0 0.25em 0"
          $size="l"
        >
          {title}
        </H3>
        <P
          className="description"
          $color="accent"
          $colorWeight="200"
          $size="2xs"
        >
          {description}
        </P>
        {bottomIconText && (
          <div className="card-footer">
            <BottomIcon className="icon" />
            <span>{bottomIconText}</span>
          </div>
        )}
      </ImageCardContentWrapper>
      <div className="img-container">
        <Image src={imageSrc} alt={title} fill />
      </div>
    </ImageCardWrapper>
  );
};

export default ImageCard;
