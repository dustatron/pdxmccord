import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const videos = () => {
  return db.video.findMany()
}

export const video = ({ id }) => {
  return db.video.findOne({
    where: { id },
  })
}

export const createVideo = ({ input }) => {
  requireAuth()
  return db.video.create({
    data: input,
  })
}

export const updateVideo = ({ id, input }) => {
  requireAuth()
  return db.video.update({
    data: input,
    where: { id },
  })
}

export const deleteVideo = ({ id }) => {
  requireAuth()
  return db.video.delete({
    where: { id },
  })
}
