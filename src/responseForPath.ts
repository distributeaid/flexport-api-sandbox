import * as path from 'path'
import { promises as fs } from 'fs'

export const responseForPath = async (resource?: string): Promise<string> => {
	const folders = resource?.substr(1).split('/') ?? []
	const fileName = folders.pop()
	const f = path.join(
		__dirname,
		'..',
		'sandbox',
		...folders,
		`${fileName}.json`,
	)
	return fs.readFile(f, 'utf-8')
}
