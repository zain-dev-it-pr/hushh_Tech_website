import React from "react";
import { useNavigate } from "react-router-dom";
import { useDiscoverFundALogic } from "./logic";
import HushhTechBackHeader from "../../components/hushh-tech-back-header/HushhTechBackHeader";
import HushhTechCta, {
  HushhTechCtaVariant,
} from "../../components/hushh-tech-cta/HushhTechCta";
import HushhTechFooter, {
  HushhFooterTab,
} from "../../components/hushh-tech-footer/HushhTechFooter";

const CARD_ICON_CLASS = "w-[1.3rem] h-[1.3rem] text-hushh-blue";

const LineIcon = ({
  name,
  className = CARD_ICON_CLASS,
}: {
  name: string;
  className?: string;
}) => {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "server-rack-nodes":
      return (
        <svg {...commonProps}>
          <rect x="7" y="5" width="10" height="14" rx="2.5" />
          <path d="M9.5 9h5M9.5 12h5M9.5 15h3" />
          <circle cx="5" cy="9" r="1.25" />
          <circle cx="19" cy="9" r="1.25" />
          <circle cx="19" cy="15" r="1.25" />
          <path d="M6.25 9H7M17 9h.75M17 15h.75" />
        </svg>
      );
    case "binary-brain-gears":
      return (
        <svg {...commonProps}>
          <path d="M9.5 7.5a3.8 3.8 0 0 0-3.8 3.8c0 1.1.47 2.08 1.21 2.77.55.52.84 1.14.84 1.84V17h4.1" />
          <path d="M14.5 7.5a3.8 3.8 0 0 1 3.8 3.8 3.78 3.78 0 0 1-1.21 2.77c-.55.52-.84 1.14-.84 1.84V17h-2.1" />
          <path d="M9.25 19h5.5M10.25 21h3.5" />
          <path d="M9 10v2M8 11h2M14.8 9.4v2.2M13.7 10.5H16" />
          <circle cx="15.8" cy="14.7" r="1.5" />
          <path d="M15.8 12.2v.6M15.8 16.6v.6M13.3 14.7h.6M17.7 14.7h.6M14.2 13.1l.42.42M16.98 15.88l.42.42M17.4 13.1l-.42.42M14.62 15.88l-.42.42" />
        </svg>
      );
    case "palm-coins":
      return (
        <svg {...commonProps}>
          <path d="M5 14.5h4.5c1.3 0 2.42.92 2.67 2.2L12.5 18H9.75c-.93 0-1.83-.28-2.6-.82L5 15.7V14.5Z" />
          <path d="M12.5 18H16a2 2 0 0 0 0-4h-3.2" />
          <path d="M5 14.5v3.25" />
          <circle cx="10" cy="8" r="1.2" />
          <circle cx="14.2" cy="7" r="1.2" />
          <circle cx="17.4" cy="9.6" r="1.2" />
          <path d="M10 6.1v3.8M14.2 5.1v3.8M17.4 7.7v3.8" />
        </svg>
      );
    case "clock-hourglass":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.2" />
          <path d="M9.2 8.1h5.6M9.2 15.9h5.6M10 8.1c0 1.5.72 2.38 2 3.35 1.28-.97 2-1.85 2-3.35M10 15.9c0-1.5.72-2.38 2-3.35 1.28.97 2 1.85 2 3.35" />
        </svg>
      );
    case "scale-chart":
      return (
        <svg {...commonProps}>
          <path d="M12 5v11M8 19h8" />
          <path d="M7 8h10" />
          <path d="M9.5 8 7.5 12h4L9.5 8ZM14.5 8l-2 4h4l-2-4Z" />
          <path d="M5 18v-2.5l2-2 1.8 1.8L11 13" />
          <path d="M13.2 11.2 15 9.4l1.8 1.8L19 8.8" />
        </svg>
      );
    case "stack-coins-arrows":
      return (
        <svg {...commonProps}>
          <ellipse cx="8" cy="16.5" rx="2.4" ry="1.2" />
          <path d="M5.6 16.5v1.7c0 .66 1.07 1.2 2.4 1.2s2.4-.54 2.4-1.2v-1.7" />
          <ellipse cx="14.8" cy="13.5" rx="2.6" ry="1.25" />
          <path d="M12.2 13.5v3c0 .69 1.16 1.25 2.6 1.25s2.6-.56 2.6-1.25v-3" />
          <path d="M17.8 7.5h2.7v2.7M20.5 7.5l-4.4 4.4" />
          <path d="M6.5 10.8h2.3V8.5M8.8 10.8 4.9 14.7" />
        </svg>
      );
    case "target-equilibrium":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="6.5" />
          <circle cx="12" cy="12" r="3.1" />
          <path d="M12 3.7v2.1M12 18.2v2.1M3.7 12h2.1M18.2 12h2.1" />
          <path d="m15.8 8.2 2.3-2.3M18.1 5.9h-2.3v2.3" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      );
  }
};

const FieldRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="group flex items-center justify-between gap-4 border-b border-gray-200 py-4 hover:bg-gray-50/50 transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
    <span className="text-sm text-gray-500 font-light">{label}</span>
    <div className="flex items-center gap-2 text-right">{children}</div>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium mb-2">
    {children}
  </h2>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="h-full flex items-start gap-4 border border-gray-200 rounded-2xl p-5 hover:border-gray-300 hover:bg-gray-50/50 transition-all">
    <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center shrink-0 bg-white">
      <LineIcon name={icon} />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-[13px] font-semibold text-black leading-snug mb-1">
        {title}
      </h3>
      <p className="text-[11px] text-gray-400 font-light leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const PHILOSOPHY_ICONS: Record<string, string> = {
  "Data as an Asset": "server-rack-nodes",
  "AI-Enhanced Decisions": "binary-brain-gears",
  "Targeting Equilibrium": "target-equilibrium",
};

const EDGE_ICONS: Record<string, string> = {
  "Systematically Sell Premium": "palm-coins",
  "Maximize Decay": "clock-hourglass",
  "Maintain Delta-Neutrality": "scale-chart",
  "Strategic Accumulation & Income": "stack-coins-arrows",
};

const ASSET_ICONS: Record<string, string> = {
  "U.S. Large-Cap Equities": "account_balance",
  "Strategic Options Overlay": "tune",
  "Cash & Equivalents": "savings",
};

const ASSET_COLORS: Record<string, string> = {
  "U.S. Large-Cap Equities": "text-hushh-blue",
  "Strategic Options Overlay": "text-ios-yellow",
  "Cash & Equivalents": "text-ios-green",
};

const RISK_ICONS: Record<string, string> = {
  "Position Limits": "pie_chart",
  "Hedging Framework": "shield",
  "Drawdown Protocols": "trending_down",
  "Liquidity Management": "water_drop",
};

const RISK_COLORS: Record<string, string> = {
  "Position Limits": "text-ios-yellow",
  "Hedging Framework": "text-ios-green",
  "Drawdown Protocols": "text-ios-red",
  "Liquidity Management": "text-hushh-blue",
};

const FundA = () => {
  const navigate = useNavigate();
  const {
    heroTitle,
    heroSubtitle,
    heroDescription,
    targetIRRLabel,
    targetIRRValue,
    targetIRRPeriod,
    targetIRRDisclaimer,
    philosophySectionTitle,
    philosophyCards,
    sellTheWallHref,
    edgeCards,
    assetFocusSectionTitle,
    assetFocusDescription,
    assetPillars,
    alphaStackSectionTitle,
    alphaStackSubtitle,
    alphaStackRows,
    riskSectionTitle,
    riskCards,
    keyTermsSectionTitle,
    keyTermsSubtitle,
    keyTerms,
    shareClasses,
    joinSectionTitle,
    joinSectionDescription,
    joinButtonLabel,
    handleCompleteProfile,
  } = useDiscoverFundALogic();

  return (
    <div className="bg-white text-gray-900 min-h-screen antialiased flex flex-col selection:bg-hushh-blue selection:text-white">
      <HushhTechBackHeader
        onBackClick={() => navigate("/")}
        rightType="hamburger"
      />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow pb-32 lg:pb-12">
        <div className="flex flex-col gap-10 pt-6 lg:gap-14">
          <section className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-stretch">
            <div className="pb-8 lg:col-span-7 xl:col-span-8 lg:pb-0 lg:pt-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-hushh-blue/20 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-hushh-blue rounded-full" />
                <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-hushh-blue">
                  Flagship Fund
                </span>
              </div>

              <h1
                className="text-[2.75rem] leading-[1.1] font-normal text-black tracking-tight sm:text-[3.25rem] lg:text-[4rem]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {heroTitle} <br />
                <span className="text-gray-400 italic font-light">
                  {heroSubtitle}
                </span>
              </h1>

              <p className="text-[13px] text-gray-400 font-light mt-4 leading-relaxed max-w-xs sm:max-w-md lg:max-w-xl sm:text-sm">
                {heroDescription}
              </p>
            </div>

            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-ios-dark rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden h-full flex items-center justify-center">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-hushh-blue/15 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 font-medium">
                    {targetIRRLabel}
                  </p>
                  <p
                    className="text-[48px] leading-none font-medium text-ios-green mb-2 sm:text-[56px]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {targetIRRValue}
                  </p>
                  <p className="text-[13px] text-gray-400 mb-4">
                    {targetIRRPeriod}
                  </p>
                  <p className="text-[9px] text-gray-600 italic max-w-[220px] sm:max-w-[260px] mx-auto leading-relaxed">
                    {targetIRRDisclaimer}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-10 xl:grid-cols-2 xl:gap-12">
            <div>
              <SectionLabel>{philosophySectionTitle}</SectionLabel>
              <div className="grid gap-3 sm:grid-cols-2">
                {philosophyCards.map((card) => (
                  <FeatureCard
                    key={card.title}
                    icon={PHILOSOPHY_ICONS[card.title] || "lightbulb"}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>
                Our Edge -{" "}
                <a
                  href={sellTheWallHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hushh-blue underline decoration-hushh-blue/30 hover:decoration-hushh-blue transition-colors"
                >
                  Sell the Wall
                </a>{" "}
                Framework
              </SectionLabel>
              <div className="grid gap-3 sm:grid-cols-2">
                {edgeCards.map((card) => (
                  <FeatureCard
                    key={card.title}
                    icon={EDGE_ICONS[card.title] || "auto_awesome"}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-10 xl:grid-cols-12 xl:gap-12">
            <div className="xl:col-span-5">
              <SectionLabel>{assetFocusSectionTitle}</SectionLabel>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed mb-4 lg:max-w-md">
                {assetFocusDescription}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {assetPillars.map((pillar) => (
                  <FeatureCard
                    key={pillar.title}
                    icon={ASSET_ICONS[pillar.title] || "category"}
                    iconColor={ASSET_COLORS[pillar.title] || "text-hushh-blue"}
                    title={pillar.title}
                    description={pillar.description}
                  />
                ))}
              </div>
            </div>

            <div className="xl:col-span-7">
              <SectionLabel>{alphaStackSectionTitle}</SectionLabel>
              <p className="text-[10px] text-gray-400 italic mb-1">
                {alphaStackSubtitle}
              </p>
              <div>
                {alphaStackRows.map((row) =>
                  row.isTotalRow ? (
                    <div
                      key={row.label}
                      className="flex items-center justify-between bg-ios-dark text-white rounded-2xl px-6 py-4 mt-3"
                    >
                      <span className="text-sm font-semibold">
                        {row.label}
                      </span>
                      <span
                        className="text-xl font-medium text-ios-green"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ) : (
                    <FieldRow key={row.label} label={row.label}>
                      <span className="text-sm font-semibold text-black">
                        {row.value}
                      </span>
                    </FieldRow>
                  )
                )}
              </div>
            </div>
          </section>

          <section className="grid gap-10 xl:grid-cols-12 xl:gap-12">
            <div className="xl:col-span-5">
              <SectionLabel>{riskSectionTitle}</SectionLabel>
              <div className="grid gap-3 sm:grid-cols-2">
                {riskCards.map((card) => (
                  <FeatureCard
                    key={card.title}
                    icon={RISK_ICONS[card.title] || "security"}
                    iconColor={RISK_COLORS[card.title] || "text-ios-green"}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>

            <div className="xl:col-span-7">
              <SectionLabel>{keyTermsSectionTitle}</SectionLabel>
              <p className="text-[10px] text-gray-400 italic mb-1">
                {keyTermsSubtitle}
              </p>

              <div className="mb-6">
                {keyTerms.slice(0, 2).map((term) => (
                  <FieldRow key={term.title} label={term.title}>
                    <span className="text-[12px] font-medium text-black max-w-[180px] sm:max-w-[260px] lg:max-w-[320px] text-right leading-snug">
                      {term.content}
                    </span>
                  </FieldRow>
                ))}
              </div>

              <SectionLabel>Share Classes</SectionLabel>
              <div className="grid gap-3 mb-6 md:grid-cols-2">
                {shareClasses.map((sc) => (
                  <div
                    key={sc.shareClass}
                    className="border border-gray-200 rounded-2xl p-5 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-ios-dark flex items-center justify-center">
                          <span className="material-symbols-outlined text-white !text-[0.9rem]">
                            account_balance_wallet
                          </span>
                        </div>
                        <span className="text-[13px] font-semibold text-black">
                          {sc.shareClass}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-hushh-blue bg-hushh-blue/10 px-2.5 py-1 rounded-full">
                        Min {sc.minInvestment}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-0.5">
                          Mgmt
                        </p>
                        <p className="text-[12px] font-semibold text-black">
                          {sc.managementFee}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-0.5">
                          Perf
                        </p>
                        <p className="text-[12px] font-semibold text-black">
                          {sc.performanceFee}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-0.5">
                          Hurdle
                        </p>
                        <p className="text-[12px] font-semibold text-black">
                          {sc.hurdleRate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                {keyTerms.slice(2).map((term) => (
                  <FieldRow key={term.title} label={term.title}>
                    <span className="text-[12px] font-medium text-black max-w-[180px] sm:max-w-[260px] lg:max-w-[320px] text-right leading-snug">
                      {term.content}
                    </span>
                  </FieldRow>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="lg:max-w-xl">
                <h2
                  className="text-[22px] font-medium text-black tracking-tight mb-2 sm:text-[28px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {joinSectionTitle}
                </h2>
                <p className="text-[13px] text-gray-400 font-light leading-relaxed max-w-xs sm:max-w-md">
                  {joinSectionDescription}
                </p>
              </div>

              <div className="space-y-3 lg:w-full lg:max-w-sm">
                <HushhTechCta
                  variant={HushhTechCtaVariant.BLACK}
                  onClick={handleCompleteProfile}
                >
                  {joinButtonLabel}
                  <span className="material-symbols-outlined !text-[1.1rem]">
                    arrow_forward
                  </span>
                </HushhTechCta>
                <HushhTechCta
                  variant={HushhTechCtaVariant.WHITE}
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </HushhTechCta>
              </div>
            </div>
          </section>

          <p
            className="text-[9px] text-gray-400 text-center leading-relaxed italic max-w-xs sm:max-w-lg lg:max-w-3xl mx-auto pb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Investing involves risk, including possible loss of principal. Past
            performance does not guarantee future results. Hushh Technologies is an
            SEC registered investment advisor.
          </p>
        </div>
      </main>

      <div className="lg:hidden">
        <HushhTechFooter activeTab={HushhFooterTab.FUND_A} />
      </div>
    </div>
  );
};

export default FundA;
