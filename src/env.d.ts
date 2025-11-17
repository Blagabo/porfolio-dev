/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_FORMSPREE_ENDPOINT?: string
	readonly PUBLIC_PEXELS_API_KEY?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
