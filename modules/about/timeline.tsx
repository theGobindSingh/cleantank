import Chip from "@components/chip";
import { H2, H3, P, Span } from "@components/html";
import {
  TimelineEventItem,
  TimelineHeaderBlock,
  TimelineTrack,
  TimelineWrapper,
} from "@modules/about/styles";
import { TimelineSectionProps } from "@modules/about/types";

const eventMapper = (
  {
    year,
    title,
    description,
  }: NonNullable<TimelineSectionProps["events"]>[number],
  index: number,
) => {
  const side = index % 2 === 0 ? "left" : "right";
  return (
    <TimelineEventItem key={year} $side={side}>
      <div className="event-year">
        <Span
          $size="3xs"
          $weight="700"
          $color="secondary"
          $colorWeight="500"
          $letterSpacing="0.1em"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {year}
        </Span>
      </div>
      <div className="event-dot" />
      <div className="event-content">
        <H3
          $size="1xs"
          $weight="700"
          $color="primary"
          $colorWeight="200"
          $margin="0"
        >
          {title}
        </H3>
        <P
          $size="3xs"
          $color="neutral"
          $colorWeight="400"
          $margin="0"
          $lineHeight="1.7"
        >
          {description}
        </P>
      </div>
    </TimelineEventItem>
  );
};

const TimelineSection = ({
  chip,
  title,
  events = [],
}: TimelineSectionProps) => {
  return (
    <TimelineWrapper element="section" bg="var(--color-neutral-900)">
      <TimelineHeaderBlock>
        {chip && (
          <Chip
            $backgroundColor="secondary"
            $backgroundColorWeight="800"
            $textColorWeight="100"
          >
            {chip.toUpperCase()}
          </Chip>
        )}
        {title && (
          <H2
            $margin={chip ? "1rem 0 0" : "0"}
            $weight="700"
            $color="primary"
            $colorWeight="100"
          >
            {title}
          </H2>
        )}
      </TimelineHeaderBlock>
      <TimelineTrack>{events.map(eventMapper)}</TimelineTrack>
    </TimelineWrapper>
  );
};

export default TimelineSection;
