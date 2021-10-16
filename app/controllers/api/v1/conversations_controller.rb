class Api::V1::ConversationsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        conversations = Conversation.all
        conversationsJSON = Conversation.all.to_json(:include => :users)
        ActionCable.server.broadcast 'conversations_channel', conversationsJSON
        render json: conversations.to_json(:include => :users)
    end
    def create
        binding.pry
    end
end
