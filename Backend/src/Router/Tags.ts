import { Router } from "express";
import { getAllTags,deleteTag,addTag } from "../Controller/Tags";

const tagsRoute = Router ()

tagsRoute.get('/tags/all',getAllTags)
tagsRoute.delete('/tag/delete/:id',deleteTag)
tagsRoute.post('/tagadd',addTag)


export default tagsRoute

