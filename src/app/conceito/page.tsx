import type { Metadata } from "next";
import ScrollConcept from "@/components/gym/ScrollConcept";
import "./concept.css";

export const metadata: Metadata = {
  title: "Direção visual para academias",
  robots: { index: false, follow: false },
};

export default function ConceptPage() {
  return <ScrollConcept />;
}
