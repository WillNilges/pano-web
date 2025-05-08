"use server";

export async function getPanoEndpoint() {
  return process.env.PANO_ENDPOINT;
}
