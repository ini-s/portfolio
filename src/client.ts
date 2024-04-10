import { createClient } from "@sanity/client";

export default createClient({
	projectId: "delk8zbw",
	dataset: "production",
	apiVersion: "2024-02-10",
	useCdn: false,
});
