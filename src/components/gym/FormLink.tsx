"use client";

import type { MouseEvent } from "react";
import { trackGymEvent } from "./ContactLink";

type TallyRuntime = {
  openPopup: (id: string, options: {
    layout: "modal";
    width: number;
    onSubmit: () => void;
    onClose: () => void;
  }) => void;
};

export default function FormLink({ placement }: { placement: string }) {
  function openForm(event: MouseEvent<HTMLAnchorElement>) {
    trackGymEvent("form_open", placement);
    const tally = (window as Window & { Tally?: TallyRuntime }).Tally;
    // The hosted form remains usable if the widget is still loading or blocked.
    if (!tally) return;
    event.preventDefault();
    const trigger = event.currentTarget;
    tally.openPopup("XxOGxe", {
      layout: "modal",
      width: 640,
      onSubmit: () => trackGymEvent("generate_lead", placement),
      onClose: () => trigger.focus(),
    });
  }

  return <a href="https://tally.so/r/XxOGxe" target="_blank" rel="noopener noreferrer"
    className="zc-form-link" onClick={openForm}>Prefiro preencher um formulário</a>;
}
