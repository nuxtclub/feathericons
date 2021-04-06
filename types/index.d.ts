import feathericons from 'feather-icons'

declare module '@nuxt/vue-app' {
	interface Context {
		$feathericons: typeof feathericons.icons
	}
}

declare module '@nuxt/types' {
	interface Context {
		$feathericons: typeof feathericons.icons
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$feathericons: typeof feathericons.icons
	}
}

declare module 'vuex/types/index' {
	interface Store<S> {
		$feathericons: typeof feathericons.icons
	}
}
