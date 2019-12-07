'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Team {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, auth }, next) {
    const slug = request.header('TEAM');

    let team = null;

    if (slug) {
      team = await auth.user
        .teams()
        .where('slug', slug) //procura pela slug
        .first();
    }

    if (!team) {
      return response.status(401).send();
    }

    auth.user.currentTeam = team.id; //o funcionamento e so com user
    request.team = team; //guarda o time atual do usuario

    await next();
  }
}

module.exports = Team;
