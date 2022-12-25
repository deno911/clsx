/**
 * Version managed by {@link https://deno.land/x/pub}
 */
export const VERSION = "0.0.1";

/**
 * Prepublish hook is called prior to the actual commit/tag of any files.
 * The hook is invoked with the upgraded target version for its only argument.
 * Returning `false` will abort the publish process before making the commit.
 */
export function prepublish(version: string) {
  console.log("Releasing new version: %s...", version);
}

/**
 * Postpublish hook is called immediately after successfully pushing the newly
 * tagged version to GitHub. This is a good place to run any cleanup procedures
 * or to log a success message to the standard output (`console`).
 * The hook is invoked with the upgraded version for its only argument.
 */
export function postpublish(version: string) {
  console.log("✔️ successfully published version %s!", version);
}
