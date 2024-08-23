import { seriesService } from "../services/index.js";
import { httpResponse } from "../utils/httpResponse.js";

export const seriesController = {
  getAll: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const sortBy = req.query.sortBy || "createdAt";
      const order = req.query.order || "asc";
      const data = await seriesService.getAll(page, limit, sortBy, order);
      if (!data) {
        return httpResponse.NOT_FOUND(res, "Data not found");
      }
      return httpResponse.SUCCESS(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await seriesService.getById(req.params.id);
      if (!data) {
        return httpResponse.NOT_FOUND(res, "Series not found");
      }
      return httpResponse.SUCCESS(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  add: async (req, res) => {
    try {
      const data = await seriesService.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  update: async (req, res) => {
    try {
      const data = await seriesService.update(req.params.id, req.body);
      if (!data) {
        return httpResponse.NOT_FOUND(res, "Series not found");
      }
      return httpResponse.SUCCESS(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  delete: async (req, res) => {
    try {
      const data = await seriesService.delete(req.params.id);
      if (!data) {
        return httpResponse.NOT_FOUND(res, "Series not found");
      }
      return httpResponse.SUCCESS(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  getAllSeasonsOfSeriesBySeriesId: async (req, res) => {
    try {
      const data = await getAllSeasonsOfSeriesBySeriesId(req.params.id);
      if (!data) {
        return httpResponse.NOT_FOUND(res, "Data not found");
      }
      return httpResponse.SUCCESS(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  getAllEpisodesOfSeriesBySeriesId: async (req, res) => {
    try {
      const data = await getAllEpisodesOfSeriesBySeriesId(req.params.id);
      if (!data) {
        return httpResponse.NOT_FOUND(res, "Data not found");
      }
      return httpResponse.SUCCESS(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
};
