import { Router } from 'express'
import { asyncHandler } from '../util'
const fs = require('fs').promises;

function generateUUID() { // Public Domain/MIT
	var d = new Date().getTime();//Timestamp
	var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16;//random number between 0 and 16
		if (d > 0) {//Use timestamp until depleted
			r = (d + r) % 16 | 0;
			d = Math.floor(d / 16);
		} else {//Use microseconds since page-load if supported
			r = (d2 + r) % 16 | 0;
			d2 = Math.floor(d2 / 16);
		}
		return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
}


export const makeCrudRouter = <T extends {}>(
	routerPrefixPath: string,
	dir: string,
) => {
	const crud = Router()

	crud.post(
		routerPrefixPath,
		asyncHandler(async (req, res) => {
			await fs.mkdir(dir, { recursive: true })

			const id = generateUUID()
			console.log("POST body", req.body)
			req.body = { ...(req.body || {}), id, }
			await fs.writeFile(dir + '/' + id, JSON.stringify(req.body))
			res.json({
				id,
			})
		})
	)

	crud.post(
		routerPrefixPath + "/:id",
		asyncHandler(async (req, res) => {
			await fs.mkdir(dir, { recursive: true })

			await fs.writeFile(dir + '/' + req.params.id, JSON.stringify(req.body))
			res.sendStatus(200)
		})
	)

	crud.get(
		routerPrefixPath,
		asyncHandler(async (req, res) => {
			const files = await fs.readdir(dir);
			const results = []
			for (const file of files) {
				const fileName = file.toString()
				if(fileName.startsWith('.')) continue
				results.push(JSON.parse(await fs.readFile(dir + '/' + fileName, { encoding: "utf-8" })))
			}
			res.json(results)
			console.log(results)
		})
	)

	crud.get(
		routerPrefixPath + '/:id',
		asyncHandler(async (req, res) => {
			const data = JSON.parse(await fs.readFile(dir + '/' + req.params.id, { encoding: "utf-8" }))
			res.json(data)
		})
	)

	crud.delete(
		routerPrefixPath + '/:id',
		asyncHandler(async (req, res) => {
			await fs.rm(dir + '/' + req.params.id)
		})
	)

	return crud
}
