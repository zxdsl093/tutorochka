module TutorialsHelper
    def tag_cloud(tags, classes)
        max = tags.sort_by(&:count).last
        tags.each do |tag|
          index = tag.count.to_f / max.count * (classes.size-1)
          yield(tag, classes[index.round])
        end
    end

    def to_markdown(text)
        Redcarpet::Markdown.new(Redcarpet::Render::HTML.new(render_options = {}), extensions = {}).render(text)
    end
end