import { Shape, ShapeId } from '../shape';

class Repository implements RepositoryInterface {
	private storage: ShapeMap;

	public constructor() {
		this.storage = new Map<ShapeId, Shape>();
	}

	public insert(shape: Shape): boolean {
		if (!this.has(shape.id)) {
			this.storage.set(shape.id, shape);
			return true;
		}
		return false;
	}

	public delete(shapeId: ShapeId): Shape | null {
		if (this.has(shapeId)) {
			let deletedShape = this.get(shapeId)!;
			let isDeleted = this.storage.delete(shapeId);
			if (isDeleted) return deletedShape;
		}
		return null;
	}

	public find(shapeId: ShapeId): Shape | null {
		if (!this.has(shapeId)) return null;
		return this.get(shapeId)!;
	}

	public toArray(): Array<[string, Shape]> {
		return Array.from(this.storage);
	}

	protected get(shapeId: string): Shape | null {
		return this.storage.get(shapeId) ?? null;
	}

	protected has(shapeId: ShapeId): boolean {
		return !!this.storage.has(shapeId);
	}

	protected size(): number {
		return this.storage.size;
	}
}

type ShapeMap = Map<ShapeId, Shape>;

export interface RepositoryInterface {
	insert(shape: Shape): boolean;
	delete(shapeId: ShapeId): Shape | null;
	find(shapeId: ShapeId): Shape | null;
}

export default Repository;
