import { Tally, Process } from "@seda-protocol/as-sdk/assembly";

/**
 * Executes the tally phase within the SEDA network.
 * This phase records a tally of Instagram likes for a post.
 */
export function tallyPhase(): void {
  Process.success(Tally.getReveals()[0].reveal);
}
