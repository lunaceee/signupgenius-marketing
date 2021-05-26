import { FiFile } from "react-icons/fi"

export default {
  title: "Downloadable",
  name: "downloadable",
  type: "object",
  icon: FiFile,
  fields: [
    {
      type: 'figure',
      name: 'fileThumbnail',
      title: "File thumbnail",
      options: {
        hotspot: true
      },
    },
    {
      type: 'downloadableItem',
      name: 'downLoadableItemParent'
    },
    {
      type: 'array', name: "fileTags", title: "File tags", of: [
        { type: 'reference', to: { type: "tag" } }
      ]
    }
  ],
  preview: {
    select: {
      title: "downLoadableItemParent.description"
    }
  }
}