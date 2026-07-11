"use client";

import RichText from "@/components/RichText";
import { isRichTextContent } from "@/utilities/richText";

export default function SectionDescription({
  content,
  className = "text-body text-zinc-600",
  prose = false,
}) {
  if (!content) return null;

  if (isRichTextContent(content)) {
    return (
      <div className={className}>
        <RichText
          data={content}
          enableGutter={false}
          enableProse={prose}
          className="[&_p+p]:mt-4 [&_p]:leading-relaxed"
        />
      </div>
    );
  }

  if (typeof content === "string") {
    return <p className={className}>{content}</p>;
  }

  return null;
}
