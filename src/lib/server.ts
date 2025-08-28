"use server";

export async function getPanoEndpoint() {
  const endpoint = process.env.PANO_ENDPOINT;
  if (endpoint === undefined || endpoint === '') {
    throw new Error('PANO_ENDPOINT is undefined.');
  }
  return endpoint;
}
