const imgNorthAmerica =
  "https://www.figma.com/api/mcp/asset/e342b11a-f829-41fe-9547-b54deed12e58";
const imgEurope =
  "https://www.figma.com/api/mcp/asset/c6a8b75d-324d-4311-bc4d-0458d1404666";
const imgAsia =
  "https://www.figma.com/api/mcp/asset/36989dc1-6583-45f2-9516-a5e41a4d994b";

const LOCATIONS = [
  {
    icon: imgNorthAmerica,
    iconInset: "inset-[2.24%_17.28%_2.25%_17.28%]",
    region: "North America",
    address: "1832 Norfolk st Houston Texas 77098",
    phone: "+1 (480) 920-1123",
    phoneHref: "tel:+14809201123",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=1832+Norfolk+St+Houston+Texas+77098",
    gap: "gap-[12px]",
    opacity: "",
  },
  {
    icon: imgEurope,
    iconInset: "inset-[0_15.4%]",
    region: "Europe",
    address: "West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom",
    phone: "+44 (746) 0766-922",
    phoneHref: "tel:+447460766922",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=371+Deansgate+Manchester+M15+4UP+United+Kingdom",
    gap: "gap-[12px]",
    opacity: "",
  },
  {
    icon: imgAsia,
    iconInset: "inset-[4.34%_-0.12%_4.3%_0.1%]",
    region: "Asia",
    address: "144/2, Block B, Bankers Society Near DHA Phase 4, Lahore, 54792",
    phone: "042-37888403",
    phoneHref: "tel:04237888403",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=144%2F2+Block+B+Bankers+Society+DHA+Phase+4+Lahore+Pakistan",
    gap: "gap-[20px]",
    opacity: "opacity-90",
  },
];

function LocationCard({
  icon,
  iconInset,
  region,
  address,
  phone,
  phoneHref,
  mapHref,
  gap,
  opacity,
}) {
  return (
    <div className="flex flex-1 w-full min-w-px items-start p-[20px] relative rounded-[16px] self-stretch">
      <div
        className={`flex flex-1 min-w-px items-center relative ${gap} ${opacity}`}
      >
        {/* Icon — clicks open Google Maps */}
        <a
          href={mapHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${region} location on Google Maps`}
          className="overflow-clip relative shrink-0 size-[100px] cursor-pointer"
        >
          <div className={`absolute ${iconInset}`}>
            <img
              src={icon}
              alt={region}
              className="absolute block inset-0 max-w-none size-full"
            />
          </div>
        </a>

        {/* Text */}
        <div className="flex flex-1 flex-col gap-[6px] items-start min-w-px relative">
          {/* Region name — clicks open Google Maps */}
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline underline-offset-2"
          >
            <p
              className="[word-break:break-word] text-white text-[20px] leading-[normal] font-medium whitespace-nowrap m-0 transition-colors duration-150 hover:text-[#f3fe00]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              {region}
            </p>
          </a>

          {/* Address — clicks open Google Maps */}
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline min-w-full w-[min-content]"
          >
            <p
              className="[word-break:break-word] text-[#8e8e8e] text-[14px] leading-[22px] font-normal m-0 transition-colors duration-150 hover:text-[#b0b0b0]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              {address}
            </p>
          </a>

          {/* Phone — calls */}
          <a
            href={phoneHref}
            className="[word-break:break-word] text-[#f3fe00] text-[16px] leading-[22px] font-medium no-underline min-w-full w-[min-content] hover:underline underline-offset-2"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Locations() {
  return (
    <section className="bg-[#1a1a1a] w-full">
      <div className="container mx-auto flex flex-col lg:flex-row gap-[16px] items-start p-[16px] sm:p-[20px] lg:p-[24px]">
        {LOCATIONS.map((loc) => (
          <LocationCard key={loc.region} {...loc} />
        ))}
      </div>
    </section>
  );
}
