class MoviesController < ApplicationController
  def index
    @search_results = []

    if params.key? :search_term
      request = Typhoeus::Request.new(
        "http://www.omdbapi.com/",
        method: :get,
        params: {s: params[:search_term]}
      )
      request.run
      parsed = JSON.parse(request.response.body)
      @search_results = parsed["Search"]
    end
  end
end
