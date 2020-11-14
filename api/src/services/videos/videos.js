import { db } from 'src/lib/db'

export const videos = () => {
  return db.video.findMany()
}

export const video = ({ id }) => {
  return db.video.findOne({
    where: { id },
  })
}

export const createVideo = ({ input }) => {
  return db.video.create({
    data: input,
  })
}

export const updateVideo = ({ id, input }) => {
  return db.video.update({
    data: input,
    where: { id },
  })
}

export const deleteVideo = ({ id }) => {
  return db.video.delete({
    where: { id },
  })
}
