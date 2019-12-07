'use strict';

const Invite = use('App/Models/Invite');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with invites
 */
class InviteController {
  async store({ request, auth }) {
    // console.log(request.team);

    //pegar email
    const invites = request.input('invites');

    const data = invites.map(email => ({
      email,
      user_id: auth.user.id,
      team_id: request.team.id
    }));
    console.log(data);
    //const invitesExists = Invite.query().where('email', data.email);

    // if (invitesExists) {
    //    return response.status(401).send({ message: "You're invited is exists" });
    // }

    await Invite.createMany(data);
  }
}

module.exports = InviteController;
