"use client";
import { Player, type PlayerRef } from "@remotion/player";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { GymDemo } from "@/remotion/Root";
import type { DemoProps } from "@/remotion/DemoArtwork";
import { trackGymEvent } from "./ContactLink";
export default function DemoPlayer({
  kind,
  compact,
  visible,
}: DemoProps & { visible: boolean }) {
  const player = useRef<PlayerRef>(null);
  const tracked = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  useEffect(() => {
    const instance = player.current;
    if (!instance) return;
    const play = () => {
      setPlaying(true);
      setEnded(false);
      if (!tracked.current) {
        trackGymEvent("demo_start", compact ? "hero" : kind);
        tracked.current = true;
      }
    };
    const pause = () => setPlaying(false);
    const end = () => {
      setPlaying(false);
      setEnded(true);
    };
    instance.addEventListener("play", play);
    instance.addEventListener("pause", pause);
    instance.addEventListener("ended", end);
    return () => {
      instance.removeEventListener("play", play);
      instance.removeEventListener("pause", pause);
      instance.removeEventListener("ended", end);
    };
  }, [kind, compact]);
  useEffect(() => {
    if (!visible) player.current?.pause();
  }, [visible]);
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) player.current?.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  return (
    <>
      <Player
        ref={player}
        component={GymDemo}
        inputProps={{ kind, compact }}
        durationInFrames={compact ? 540 : 720}
        fps={30}
        compositionWidth={640}
        compositionHeight={760}
        style={{ width: "100%" }}
        initialFrame={compact ? 405 : 540}
        moveToBeginningWhenEnded={false}
        controls={false}
        clickToPlay={false}
        spaceKeyToPlayOrPause={false}
      />
      <button
        className="demo-control"
        type="button"
        aria-label={
          playing
            ? "Pausar demonstração"
            : ended
              ? "Repetir demonstração"
              : "Reproduzir demonstração"
        }
        onClick={() => {
          if (playing) player.current?.pause();
          else {
            if (ended || !tracked.current) player.current?.seekTo(0);
            player.current?.play();
          }
        }}
      >
        {playing ? (
          <Pause size={15} />
        ) : ended ? (
          <RotateCcw size={15} />
        ) : (
          <Play size={15} />
        )}{" "}
        {playing ? "Pausar" : ended ? "Ver novamente" : "Assistir"}
        <span>{compact ? "18" : "24"} s</span>
      </button>
    </>
  );
}
