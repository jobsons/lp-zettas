import { Composition, useCurrentFrame } from "remotion";
import { DemoArtwork, type DemoProps } from "./DemoArtwork";
export function GymDemo(props: DemoProps) {
  const frame = useCurrentFrame();
  return (
    <DemoArtwork {...props} frame={props.compact ? (frame * 4) / 3 : frame} />
  );
}
export function RemotionRoot() {
  return (
    <>
      <Composition
        id="Atendimento"
        component={GymDemo}
        durationInFrames={720}
        fps={30}
        width={640}
        height={760}
        defaultProps={{ kind: "atendimento" }}
      />
      <Composition
        id="Cobranca"
        component={GymDemo}
        durationInFrames={720}
        fps={30}
        width={640}
        height={760}
        defaultProps={{ kind: "cobranca" }}
      />
      <Composition
        id="Gestao"
        component={GymDemo}
        durationInFrames={720}
        fps={30}
        width={640}
        height={760}
        defaultProps={{ kind: "gestao" }}
      />
      <Composition
        id="Hero"
        component={GymDemo}
        durationInFrames={540}
        fps={30}
        width={640}
        height={760}
        defaultProps={{ kind: "atendimento", compact: true }}
      />
    </>
  );
}
