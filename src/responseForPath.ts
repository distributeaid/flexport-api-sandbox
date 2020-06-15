import * as path from 'path'

/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */

export const responseForPath = async (resource?: string): Promise<string> => {
	const folders = resource?.substr(1).split('/') ?? []
	const fileName = folders.pop()
	const res = require(path.join(
		__dirname,
		'..',
		'sandbox',
		...folders,
		`${fileName}.js`,
	))
	return JSON.stringify(res)
}
