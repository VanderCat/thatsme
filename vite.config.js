import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import * as child from "child_process";

const commitHash = child.execSync("git rev-parse --short HEAD").toString();
const branchName = child.execSync("git rev-parse --abbrev-ref HEAD").toString();
const timeSinceCommit = child.execSync("git show -s --format=%ct HEAD").toString();

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		__GIT_COMMIT_HASH__: JSON.stringify(commitHash),
		__GIT_BRANCH__: JSON.stringify(branchName),
		__GIT_TIMESTAMP__: JSON.stringify(timeSinceCommit),
	}
});
