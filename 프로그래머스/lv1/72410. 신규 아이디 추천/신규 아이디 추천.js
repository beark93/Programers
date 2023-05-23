function solution(new_id) {
  class Step {
    constructor(id) {
      this.id = id
    }

    getId() {
      return this.id
    }

    first_step() {
      this.id = this.id.toLowerCase()
      return this
    }

    second_step() {
      this.id = this.id.replaceAll(/[^a-z|0-9|\-|\_|\.]/g, '')
      return this
    }

    third_step() {
      this.id = this.id.replaceAll(/\.{2,}/g, '.')
      return this
    }

    fourth_step() {
      this.id = this.id.replaceAll(/^\.|\.$/g, '')
      return this
    }

    fifth_step() {
      this.id = this.id || 'a'
      return this
    }

    sixth_step() {
      this.id = this.id.length > 15 ? this.id.substr(0, 15).replaceAll(/\.$/g, '') : this.id
      return this
    }

    seventh_step() {
      const last = this.id.charAt(this.id.length - 1)
      if (this.id.length < 3) {
        this.id += last.repeat(3 - this.id.length)
      }
      return this
    }
  }

  return new Step(new_id).first_step().second_step().third_step().fourth_step().fifth_step().sixth_step().seventh_step().getId()
}