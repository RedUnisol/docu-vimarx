import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
//   description: ReactNode;
// };
type FeatureItem = {
  title: string;
  image: string; // Para PNG, JPG, etc.
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Gestión Integral",
    image: "img/erp2.png",
    description: (
      <>
        Administra socios, préstamos, ahorros, y servicios desde un solo lugar.
        Todo centralizado para que no pierdas tiempo.
      </>
    ),
  },
  {
    title: "Transparencia y Control",
    image: "img/erp.png",
    description: (
      <>
        Reportes claros y en tiempo real sobre movimientos, balances y cuentas.
        Ten el control total de la mutual.
      </>
    ),
  },
  {
    title: "Atención a Socios",
    image: "img/erpSocio.png",
    description: <>Gestión rápida de solicitudes, reclamos y consultas.</>,
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="text--center">
        <img src={useBaseUrl(image)} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const features = containerRef.current?.querySelectorAll(
      `.${styles.feature}`
    );
    features?.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // ✅ cleanup
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" ref={containerRef}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
