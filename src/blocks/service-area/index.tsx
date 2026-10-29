import Actions from "@/blocks/actions";
import type { ServiceAreaBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, P } from "@components/html";
import Link from "@components/link";
import Paragraphs from "@components/paragraphs";
import type { Locale } from "@i18n";
import { tw } from "@utils/tw";
import AreaMap from "./map";

interface ServiceAreaProps extends ServiceAreaBlock {
  locale: Locale;
}

/**
 * The area in words with its actions in seven columns, the rough map framed in
 * the other five from `lg` up; below that the map follows the text.
 */
const ServiceArea = ({
  heading,
  text,
  map,
  actions,
  isSubtle,
  locale,
}: ServiceAreaProps) => {
  return (
    <CommonFullWidthWrapper
      wrapperClassName={tw(isSubtle && "bg-bg-subtle")}
      className="grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-6 lg:py-24"
    >
      <div className="flex max-w-[60ch] flex-col gap-4 lg:col-span-7">
        <H2 $margin="0 0 0.25em 0">{heading}</H2>
        <Paragraphs text={text} />
        <Actions actions={actions} locale={locale} className="pt-2" />
      </div>
      <figure className="flex flex-col gap-3 self-start lg:col-span-5">
        <div className="rounded-sm bg-surface p-4 outline-1 -outline-offset-1 outline-grey-200 md:p-6">
          <AreaMap {...map} />
        </div>
        <figcaption className="flex flex-col gap-1">
          <P $size="small" $margin="0" className="text-fg-muted">
            {map.caption}
          </P>
          {/* ODbL: the map is drawn from OpenStreetMap data */}
          <P $size="caption" $margin="0" lang="en" className="text-fg-muted">
            ©{" "}
            <Link href="https://www.openstreetmap.org/copyright">
              OpenStreetMap contributors
            </Link>
          </P>
        </figcaption>
      </figure>
    </CommonFullWidthWrapper>
  );
};

export default ServiceArea;
