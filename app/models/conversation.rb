class Conversation < ApplicationRecord
    has_many :users
    validates_length_of :users, maximum: 1
end
