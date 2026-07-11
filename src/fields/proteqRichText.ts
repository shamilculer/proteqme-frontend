import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Field } from 'payload'

export const proteqRichTextEditor = () =>
  lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const sectionDescriptionField: Field = {
  name: 'description',
  type: 'richText',
  label: 'Description',
  editor: proteqRichTextEditor(),
}

export const bodyRichTextField: Field = {
  name: 'body',
  type: 'richText',
  label: 'Body content',
  editor: proteqRichTextEditor(),
}
