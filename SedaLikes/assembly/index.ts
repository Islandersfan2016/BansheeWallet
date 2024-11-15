import { executionPhase } from "./execution-phase";
import { tallyPhase } from "./tally-phase";
import { OracleProgram } from "@seda-protocol/as-sdk/assembly";

/**
 * Defines oracle program that performs two main tasks:
 * 1. Fetches likes from followers on Instagram.
 * 2. Sends data to minting contract for tickets to be sent to followers who liked post.
 */
class InstagramLikes extends OracleProgram {
  execution(): void {
    executionPhase();
  }

  tally(): void {
    tallyPhase();
  }
}

// Runs the oracle program by executing both phases.
new InstagramLikes().run();
