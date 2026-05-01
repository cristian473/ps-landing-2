import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

interface PricingFeature {
  title: string;
  items: string[];
  listStyle?: 'check' | 'bullet';
}

interface PricingModality {
  label: string;
  price: string;
  arsReference: string;
  commitment: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  features: PricingFeature[];
  modalities?: PricingModality[];
  modalitiesLabel?: string;
  setupLabel?: string;
  setupValue?: string;
  priceLabel?: string;
  priceValue?: string;
  priceArs?: string;
  priceSubtext?: string;
  footnote?: string;
  guarantee?: string;
  closingNote?: string;
  ctaText: string;
  ctaHref: string;
  ctaInterestValue?: string;
  ctaTrackingName?: string;
  ctaTrackingLocation?: string;
  ctaVariant?: 'primary' | 'secondary';
  highlighted?: boolean;
  delay?: number;
}

export default function PricingCard({
  title,
  description,
  icon = 'rocket_launch',
  badge,
  features,
  modalities,
  modalitiesLabel,
  setupLabel,
  setupValue,
  priceLabel,
  priceValue,
  priceArs,
  priceSubtext,
  footnote,
  guarantee,
  closingNote,
  ctaText,
  ctaHref,
  ctaInterestValue,
  ctaTrackingName,
  ctaTrackingLocation,
  ctaVariant = 'primary',
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        staggerChildren: 0.06,
        delayChildren: delay + 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 220, damping: 22 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 140, damping: 14 },
    },
  };

  const cardClasses = highlighted
    ? 'border-2 border-primary/60 bg-primary/[0.04] shadow-[0_0_60px_rgba(56,182,255,0.18)]'
    : 'border border-white/10 bg-white/[0.02]';

  const ctaClasses =
    ctaVariant === 'primary'
      ? 'bg-primary text-black hover:bg-primary/90'
      : 'bg-white/5 text-white border border-white/15 hover:bg-white/10';

  const handleCtaClick = (_event: MouseEvent<HTMLAnchorElement>) => {
    if (ctaTrackingName) {
      window.trackCTAClick?.(ctaTrackingName, ctaTrackingLocation || 'pricing');
    }

    if (ctaInterestValue) {
      window.dispatchEvent(
        new CustomEvent('contact:prefill', {
          detail: { interest: ctaInterestValue },
        }),
      );
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative flex flex-col rounded-2xl ${cardClasses} overflow-visible`}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <motion.div variants={itemVariants}>
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
            <span className="material-icons text-3xl">{icon}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>

        <motion.div className="mt-7 space-y-7 flex-1" variants={itemVariants}>
          {features.map((feature, fi) => (
            <div key={fi}>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                {feature.title}
              </h4>
              <ul className="space-y-2.5">
                {feature.items.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-gray-300 text-sm"
                    variants={listItemVariants}
                  >
                    {feature.listStyle === 'bullet' ? (
                      <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    ) : (
                      <svg
                        className="mr-2 h-4 w-4 text-primary mt-0.5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {closingNote && (
          <motion.p className="mt-6 text-xs text-gray-500" variants={itemVariants}>
            {closingNote}
          </motion.p>
        )}

        <motion.div
          className="mt-7 pt-6 border-t border-white/10"
          variants={itemVariants}
        >
          {(setupLabel || setupValue) && (
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wider text-gray-500">{setupLabel}</p>
              <p className="text-2xl font-bold text-white">{setupValue}</p>
            </div>
          )}

          {modalities && modalities.length > 0 && (
            <div className="mb-3">
              {modalitiesLabel && (
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {modalitiesLabel}
                </p>
              )}
              <div className="grid grid-cols-2 gap-3">
                {modalities.map((m, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-4 ${
                      m.highlighted
                        ? 'bg-primary/10 border border-primary/40 shadow-[0_0_24px_rgba(56,182,255,0.14)]'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">
                        {m.label}
                      </span>
                      {m.highlighted && <span className="text-xs">⭐</span>}
                    </div>
                    <p className="text-2xl font-extrabold text-primary leading-none">{m.price}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{m.arsReference}</p>
                    <p className="text-[11px] text-gray-500 mt-1">{m.commitment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {priceValue && !modalities && (
            <div className="mb-3">
              {priceLabel && (
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{priceLabel}</p>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                  {priceValue}
                </span>
              </div>
              {priceArs && <p className="text-xs text-gray-400 mt-1">{priceArs}</p>}
              {priceSubtext && <p className="text-sm text-gray-300 mt-2">{priceSubtext}</p>}
            </div>
          )}

          {footnote && <p className="text-[11px] text-gray-500 mb-4">{footnote}</p>}

          {guarantee && (
            <div className="flex items-start gap-2 mb-5 p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="material-icons text-primary text-lg shrink-0">verified_user</span>
              <p className="text-xs text-gray-300 leading-snug">{guarantee}</p>
            </div>
          )}

          <a
            href={ctaHref}
            onClick={handleCtaClick}
            className={`block text-center font-bold py-3 px-6 rounded-lg transition ${ctaClasses}`}
          >
            {ctaText}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
